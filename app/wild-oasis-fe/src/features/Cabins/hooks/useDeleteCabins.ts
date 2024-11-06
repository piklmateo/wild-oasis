import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../../services/cabinsService";
import toast from "react-hot-toast";

export function useDeleteCabins() {
  const queryClient = useQueryClient();

  const { mutate: removeCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success(`Cabin deleted succesfully`);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { removeCabin, isDeleting };
}
