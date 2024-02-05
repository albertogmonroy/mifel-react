import { usersAPI, usersAPIPost } from "../../config/axiosConfig";
import { RequestPostUser } from "../../interface/services/postUser";

const getUsersService = async () => {
  return await usersAPI.get("users");
};
const postUsersService = async (body:RequestPostUser) =>{
    return await usersAPIPost.post("post", body)
}
export { getUsersService, postUsersService };
