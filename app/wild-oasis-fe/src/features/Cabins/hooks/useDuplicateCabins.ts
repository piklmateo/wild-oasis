import { useMutation, useQueryClient } from "@tanstack/react-query";
import { duplicateCabin } from "../../../services/cabinsService";
import toast from "react-hot-toast";
import { CabinDto } from "../../../services/data/types";

export function useDuplicateCabins() {
  const queryClient = useQueryClient();

  const { mutate: duplicateCabins, isPending: isDuplicating } = useMutation({
    mutationFn: duplicateCabin,
    onSuccess: (cabin: CabinDto) => {
      console.log(cabin);
      toast.success(`Cabin ${cabin.name} created succesfully`);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { duplicateCabins, isDuplicating };
}
