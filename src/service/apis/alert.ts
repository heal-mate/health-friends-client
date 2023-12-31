import axios from "axios";
import { Alert } from "./alert.type";

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/alerts`,
  withCredentials: true,
});

export const fetchGetAlerts = async () => {
  const res = await instance.get<Alert[]>("/");

  return res.data;
};

export const fetchReadAlert = async ({ alertId }: { alertId: string }) =>
  instance.patch(`/read/${alertId}`);

export const fetchRemoveAlert = async ({ alertIds }: { alertIds: string[] }) =>
  instance.delete(`/remove`, { data: { alertIds } });
