import api from "../libs/axios";
import { queryClient } from "../libs/reactQuery";
import { QueryKey, useMutation, useQuery } from "@tanstack/react-query";
import { Console } from "console";



export const useFetch = <T>() => {
  const useCreate = <T>(payload: QueryKey, url: string) => {
   const {isLoading: createLoading, mutateAsync: createAsync }=  useMutation((data: T) => {
     return api.post(url, data)}, {
     onSuccess: () => {queryClient.invalidateQueries(payload);
    },
   onError: (error: Error) => {
      console.log(error.message)
   }
   })
   return {createLoading, createAsync}
 }
 
//  const useRemove = <T>(payload: QueryKey, url: string, params?: string ) => {
//    const {isLoading: removeLoading, mutateAsync: removeAsync } = useMutation((data: T) => {
//      const fullUrl = params? `${url}${params}` : url
//      return api.delete(fullUrl, data)}, {
//        onSuccess: () => {queryClient.invalidateQueries(payload);
//        },
 
//      onError: (error: Error) => {
//        console.log(error.message)
//      }
//    },
//    )
//    return {removeLoading, removeAsync}
//  }

// const useUpdate = <T>(payload: QueryKey, url: string, params?: string ) => {
//    const {isLoading: updateLoading, mutateAsync: updateAsync } = useMutation((data: T,) => {
//      const fullUrl = `${url}${params}`
//      return api.put(fullUrl, data)}, {
//        onSuccess: () => {queryClient.invalidateQueries(payload);
//              },
//              onError: (error: Error) => {
//               console.log(error.message)
//      },
 
//    })
//    return {updateLoading, updateAsync}
//  }

 const useGet = <T>(payload: QueryKey, url: string, params: string ) => {
   return  useQuery<T, Error>(payload, async () => {
      const { data } = await api.get(`${url}${params}`);
      return data
    });
  }
 
 const useGetById = <T>(payload: QueryKey, id:string | string[] , url: string, params?: string ) => {
   const { data, error, isLoading } = useQuery<T, Error>([payload, id], async () => {
     const { data } = await api.get(`${url}${params}`);
     return data;
   });
   return { data, error, isLoading };
 }


 return {useCreate, useGet, useGetById}
}


