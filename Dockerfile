# Step 1: Build the Next.js application in a Node.js environment
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application
RUN npm run build

# Step 2: Use a smaller image for production deployment
FROM node:18-alpine AS runner

# Set the working directory
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the necessary build files from the builder stage
COPY --from=builder --chown=nextjs:nodejs /app/.next /app/.next
COPY --from=builder --chown=nextjs:nodejs /app/public /app/public
COPY --from=builder --chown=nextjs:nodejs /app/package.json /app/package.json

USER nextjs

# Expose the port where the Next.js app will run
EXPOSE 3000

# Define environment variable for production mode
ENV NODE_ENV=production
ENV NODE_TLS_REJECT_UNAUTHORIZED=0 

# Start the Next.js application
CMD ["npm", "run", "start"]
