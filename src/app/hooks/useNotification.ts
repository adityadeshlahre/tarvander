import Swal from "sweetalert2";

interface Notification {
  title: string;
  text: string;
}

export const useNotification = ({ title, text }: Notification) => {
  return () => {
    Swal.fire({
      title: `${title}`,
      text: `${text}`,
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });
  };
};
