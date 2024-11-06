import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateHotelSettings } from "../../../services/settingsService";
import toast from "react-hot-toast";

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateHotelSettings,
    onSuccess: () => {
      toast.success("Settings updated succesfully");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateSetting, isUpdating };
}
