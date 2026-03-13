"use client";
import * as HttpClient from "@/data/client/http-client";

// Function to download the file
const downloadFile = async (): Promise<void> => {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/transactions/export`; // Replace with your endpoint URL

  try {
    const response = await HttpClient.get<Blob>(
      url,
      { 
        responseType: "blob",
      },
    );
    // Create a URL for the blob
    const blobUrl = window.URL.createObjectURL(
      new Blob([response], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
    );
    const link = document.createElement("a");
    link.href = blobUrl;

    // Extract the filename from the response headers
    // const contentDisposition = response.headers["content-disposition"];
    let fileName = "downloaded-file.xlsx";
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();

    // Revoke the blob URL after download
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error downloading the file", error);
  }
};

export default downloadFile;
