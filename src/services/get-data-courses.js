import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

const fetchGETDataCourses = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params }).then((result) => {
    return result;
  });
  return data;
};

const useGETDataCourses = (options) => {
  return useQuery({
    queryKey: [API_ENDPOINT.COURSES, options],
    queryFn: fetchGETDataCourses,
  });
};

export { fetchGETDataCourses, useGETDataCourses };
