import { AppDispatch, RootState } from "@/store";
import { useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import { useSelector } from "react-redux/es/exports";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
