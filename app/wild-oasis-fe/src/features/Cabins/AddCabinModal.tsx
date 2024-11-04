import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import { useModal } from "../../context/ModalContext";
import { CabinDto } from "../../services/data/types";

const AddCabinModal = () => {
  const { closeModal } = useModal();
  const { register, handleSubmit } = useForm<CabinDto>();

  const onSubmit: SubmitHandler<CabinDto> = async (cabin) => {
    try {
      console.log(cabin);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Modal>
      <Form type="grid" heading="" headingType="xl" onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputConfig={{
            type: "password",
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
          <Button type="submit" style="primary">
            Create new cabin
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddCabinModal;
