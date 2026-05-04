'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify"; 

const BorrowButton = ({ bookTitle }) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleBorrow = () => {
    if (!session) {
      router.push("/auth/signin");
      return;
    }

    toast.success(`You have successfully borrowed "${bookTitle}"!`);
  };

  return (
    <button 
      onClick={handleBorrow}
      className='btn btn-accent font-bold mx-auto text-xl w-full py-8'
    >
      Borrow This Book
    </button>
  );
};

export default BorrowButton;