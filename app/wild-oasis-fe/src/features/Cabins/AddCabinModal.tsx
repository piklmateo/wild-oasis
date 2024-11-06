import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { useModal } from "../../context/ModalContext";
import { CabinDto } from "../../services/data/types";
import { useInsertCabin } from "./hooks/useInsertCabin";
import MiniSpinner from "../../components/MiniSpinner";

const AddCabinModal = () => {
  const { closeModal } = useModal();
  const { createCabin, isInserting } = useInsertCabin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<CabinDto>();
  console.log("SUBMITITNG: ", isSubmitting);
  const onSubmit: SubmitHandler<CabinDto> = async (cabin) => {
    try {
      createCabin(cabin, {
        onSuccess: () => {
          reset();
          closeModal();
        },
      });
      console.log(cabin);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  console.log(isSubmitting);

  return (
    <Modal>
      <Form type="grid" heading="" headingType="xl" onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputConfig={{
            type: "text",
            htmlFor: "name",
            name: "name",
            id: "name",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Cabin name
        </Input>
        <Input
          inputConfig={{
            type: "number",
            htmlFor: "maxCapacity",
            name: "maxCapacity",
            id: "maxCapacity",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Maximum capacity
        </Input>
        <Input
          inputConfig={{
            type: "number",
            htmlFor: "regularPrice",
            name: "regularPrice",
            id: "regularPrice",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Regular price
        </Input>
        <Input
          inputConfig={{
            type: "number",
            htmlFor: "discount",
            name: "discount",
            id: "discount",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Discount
        </Input>
        <Input
          inputConfig={{
            type: "textarea",
            htmlFor: "description",
            name: "description",
            id: "description",
            labelStyleVariant: "grid",
            inputStyleVariant: "grid",
            showDivider: true,
          }}
          register={register}
        >
          Description for website
        </Input>
        <Input
          inputConfig={{
            type: "file",
            htmlFor: "image",
            name: "image",
            id: "image",
            labelStyleVariant: "grid",
            inputStyleVariant: "file",
            showDivider: true,
          }}
          register={register}
        >
          Cabin photo
        </Input>
        <div className="col-span-3 flex justify-end space-x-5 pt-4">
          <Button onClick={closeModal} style="secondary">
            Cancel
          </Button>
          <Button type="submit" style="primary" disabled={isSubmitting}>
            <div className="flex justify-center gap-2 items-center">
              {isInserting && <MiniSpinner color="#FFFFFF" secondaryColor="#e2e2e2" />}
              Create new cabin
            </div>
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddCabinModal;
