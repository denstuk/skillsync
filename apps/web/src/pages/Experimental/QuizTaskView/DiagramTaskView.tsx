import { Excalidraw, exportToBlob, useHandleLibrary } from "@excalidraw/excalidraw";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { Button, Flex } from "@radix-ui/themes";
import { FC, useState } from "react";
import { IDiagramAnswer } from "../../../api/types";

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

type DiagramTaskViewProps = {
  onSubmitAnswer: (answer: IDiagramAnswer) => void;
  onSkipAnswer: () => void;
};

export const DiagramTaskView: FC<DiagramTaskViewProps> = ({ onSubmitAnswer, onSkipAnswer }: DiagramTaskViewProps) => {
  const [
    excalidrawAPI,
    setExcalidrawAPI
  ] = useState<ExcalidrawImperativeAPI | null>(null);



  const onSubmitButtonClick = async () => {
    if (!excalidrawAPI) {
      return;
    }

    const blob = await exportToBlob({
      elements: excalidrawAPI.getSceneElements(),
      appState: excalidrawAPI.getAppState(),
      files: excalidrawAPI.getFiles(),
      mimeType: "image/png",
    });

    onSubmitAnswer({ image: await blobToBase64(blob) });
  };



  useHandleLibrary({ excalidrawAPI });



  return (
    <Flex gap={"4"} direction={"column"}>
      <div style={{ height: "500px" }}>
        <Excalidraw
          excalidrawAPI={(api: ExcalidrawImperativeAPI) => setExcalidrawAPI(api)}
        />
      </div>

      <Flex mt="9" gap="3">
        <Button size="4" color="gray" className="cursor-pointer w-full" onClick={onSkipAnswer}>Skip</Button>
        <Button size="4" color="green" className="cursor-pointer w-full" onClick={onSubmitButtonClick}>Submit</Button>
      </Flex>
    </Flex>
  );
};
