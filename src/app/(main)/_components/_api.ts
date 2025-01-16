 import API from "@/services/api";
import { IUserList } from "@/types/user-list.interface";
 import { useInfiniteQuery } from "@tanstack/react-query";

type GetUserOptions = {
    params: {
         page: number;
    };
};

const getUsers = ({
    params,
}: GetUserOptions): Promise<IUserList> => {
    const { page } = params;
    const url = `?results=10&page=${page}`;
    return API.get(url);
};

export const useAllUser = ({ params }: GetUserOptions) => {
    const {
        data,
        error,
        isFetchingNextPage,
        isFetching,
        fetchNextPage,
        hasNextPage,
        refetch,
    } = useInfiniteQuery({
        queryKey: ["users", params.page],
        queryFn: ({ pageParam }) =>
            getUsers({ params: { ...params, page: pageParam } }),
        getNextPageParam: (lastPage) => lastPage.info.page + 1,
        initialPageParam: 1,
        staleTime: 2 * 60 * 60 * 1000,
        gcTime: 3 * 60 * 60 * 1000,
    });

    return {
        data,
        error,
        isFetchingNextPage,
        isFetching,
        fetchNextPage,
        hasNextPage,
        refetch,
    };
};