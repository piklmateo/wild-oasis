import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return <table className="table-auto border">{children}</table>;
};

export default Table;
