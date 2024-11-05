import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertCabin } from "../../../services/cabinsService";

export function useInsertCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isPending: isInserting } = useMutation({
    mutationFn: insertCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => console.log("error while inserting cabin...", err),
  });

  return { isInserting, createCabin };
}
