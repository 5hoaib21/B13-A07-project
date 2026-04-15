import { useLoaderData } from "react-router";
import FriendsCards from "./FriendsCards";

const AllFriends = () => {
  const friends = useLoaderData();
  return (
    <div className="w-10/12 mx-auto mt-5">
      <h3 className="text-4xl font-bold">Your Friends</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-center mt-4">
        {friends.map((friend) => (
          <FriendsCards key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
