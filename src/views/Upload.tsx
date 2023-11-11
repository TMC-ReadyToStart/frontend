import React from "react";
//import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useDropzone } from "react-dropzone";
//import { Button } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { uploadFile } from "../services/api";
import { Container } from "components";

export const Upload = () => {
  //const [files, setFiles] = useState<File[]>();
  //
  //const onDropAccepted = useCallback(
  //  (acceptedFiles: File[]) => {
  //    setFiles(acceptedFiles);
  //    console.log("AcceptedFiles : ", acceptedFiles);
  //    return;
  //  },
  //  [files]
  //);
  //const { getRootProps, getInputProps } = useDropzone({
  //  onDropAccepted,
  //  accept: { "application/zip": [".zip"] },
  //});
  /*
    <div className="lg:h-full h-auto lg:w-1/2 flex lg:justify-start items-center lg:pl-[50px] justify-center">
      <div className="space-y-10">
        <div className="flex flex-col flex-auto gap-5 lg:flex-row md:flex-col group">
          <div
            {...getRootProps({ className: "dropzone" })}
            className="flex flex-col flex-auto justify-center items-center text-center rounded-lg border-4 border-gray-300 border-dashed group-hover:border-purple-600"
          >
            <input {...getInputProps()} />
            <CloudUploadOutlinedIcon
              className="mb-2 duration-300 ease-in-out delay-150 group-hover:-translate-y-1 group-hover:scale-110"
              sx={{ height: "50px", width: "50px" }}
              id="border-frame"
            />
            <label
              className="mb-2 text-md group-hover:text-purple-600"
              htmlFor="border-frame"
            >
              Drag-and-drop a zip here{" "}
            </label>
          </div>
        </div>
        <div className="flex relative z-0 justify-center items-center w-full group lg:justify-start">
          <Button
            variant="outlined"
            onClick={() => uploadFile(files![0])}
            disabled={files === undefined}
          >
            {files === undefined ? "Upload" : "Upload " + files[0].name}
          </Button>
        </div>
      </div>
    </div>*/

  return <Container>Upload Page</Container>;
};
