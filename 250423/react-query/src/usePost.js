import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostQuery = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get(`http://localhost:3000/posts/`);
    },
    retry: 1,
    select: (data) => {
      return data.data;
    },
    gcTime: 20000,

    staleTime: 10000,
    enabled: false,
  });
};
