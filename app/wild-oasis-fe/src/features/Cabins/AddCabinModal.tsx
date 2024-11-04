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
          type="text"
          name="name"
          htmlFor="name"
          id="name"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Cabin name
        </Input>
        <Input
          type="text"
          name="maxCapacity"
          htmlFor="maxCapacity"
          id="maxCapacity"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Maximum capacity
        </Input>
        <Input
          type="text"
          name="regularPrice"
          htmlFor="regularPrice"
          id="regularPrice"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Regular price
        </Input>
        <Input
          type="number"
          name="discount"
          htmlFor="discount"
          id="discount"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Discount
        </Input>
        <Input
          type="text"
          name="description"
          htmlFor="description"
          id="description"
          labelType="grid"
          inputType="grid"
          gridDivider
          register={register}
        >
          Description for website
        </Input>
        <Input
          type="file"
          name="image"
          htmlFor="image"
          id="image"
          labelType="grid"
          inputType="file"
          gridDivider
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
