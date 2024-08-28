import Swal from "sweetalert2";

export const useLike = () => {
  return () => {
    Swal.fire({
      title: "Liked!",
      text: "You have liked the location",
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };
};
