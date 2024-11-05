import { useMutation, useQueryClient } from "@tanstack/react-query";
import { duplicateCabin } from "../../../services/cabinsService";

export function useDuplicateCabins() {
  const queryClient = useQueryClient();

  const { mutate: duplicateCabins, isPending: isDuplicating } = useMutation({
    mutationFn: duplicateCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => console.log("error while duplicating cabins", err),
  });

  return { duplicateCabins, isDuplicating };
}
