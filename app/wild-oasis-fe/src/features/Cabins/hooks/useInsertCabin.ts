import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin } from "../../../services/cabinsService";
import toast from "react-hot-toast";

export function useInsertCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isInserting } = useMutation({
    mutationFn: insertCabin,
    onSuccess: () => {
      toast.success("Cabin created succesfully");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isInserting, createCabin };
}
