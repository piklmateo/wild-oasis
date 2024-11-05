import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../../services/cabinsService";

export function useDeleteCabins() {
  const queryClient = useQueryClient();

  const { mutate: removeCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      console.log("Error while deleting cabin", err);
    },
  });

  return { removeCabin, isDeleting };
}
