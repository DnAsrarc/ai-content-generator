import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  // const deleteTodo = async (_id: string) => {
  //   try {
  //     await api.delete(`/todos/${_id}`);
  //     setTodos(todos.filter(todo => todo._id !== _id));
  //   } catch (error) {
  //     console.error('Error deleting todo:', error);
  //   }
  // };

  // const logout = () => {
  //   Cookies.remove('token');
  //   router.push('/signin'); // Điều hướng người dùng về trang đăng nhập
  // };

  return (
    <div>
      <h2> Hello World!</h2>
      <Button>Đăng xuất</Button>
      {/* <Button onClick={() => deleteTodo(todo._id)}>Delete</Button> */}

    </div>
  );
}
