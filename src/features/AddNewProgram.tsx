import BasicButton from "@/shared/BasicButton";
import AddNewProgramModal from "./AddNewProgramModal";
import { useState } from "react";

const AddNewProgram = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const changeModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  return (
    <>
      <div className=" flex justify-center gap-3 items-center pb-4">
        <BasicButton>Choose from Database</BasicButton>
        <p className=" text-xl">OR</p>
        <BasicButton onClick={changeModal}>Add custom program</BasicButton>
      </div>
      <AddNewProgramModal visible={isModalVisible} />
    </>
  );
};

export default AddNewProgram;
