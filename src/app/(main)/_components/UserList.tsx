"use client";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAllUser } from "./_api";
import UserCard from "@/_components/UserCard";
import UserCardPlaceholder from "@/_components/UserCard/UserCardPlaceholder";

const UserList = () => {
  const { ref, inView } = useInView({});
  const {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useAllUser({
    params: {
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  if (error) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>خطا در برقراری ارتباط با سرور</div>
        <div className="text-center mt-3">
          <button onClick={() => refetch()}>تلاش مجدد</button>
        </div>
      </div>
    );
  }

  const placeholderCount = 5;

  return (
    <div>
       {isFetching && !data ? (
        Array.from({ length: placeholderCount }).map((_, index) => (
          <UserCardPlaceholder key={`placeholder-${index}`} />
        ))
      ) : (
        <>
           {data?.pages.map((currentPage, idx) => (
            <Fragment key={`user-page-${idx}`}>
              {currentPage?.results?.map((user, idx) => (
                <UserCard key={`user-${idx}`} {...user} />
              ))}
            </Fragment>
          ))}

          {(isFetchingNextPage || hasNextPage) && (
            <div ref={ref}>
              {Array.from({ length: placeholderCount }).map((_, index) => (
                <UserCardPlaceholder key={`next-page-placeholder-${index}`} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserList;