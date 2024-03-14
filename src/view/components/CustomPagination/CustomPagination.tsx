import { ChangeEvent, FC, useState } from "react";
import { Button, Pagination } from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import "./CustomPagination.scss";

interface IProps {
  pageCount?: number;
  onChange?: (value: number) => void;
  type?: "simple" | "extended";
}

export const CustomPagination: FC<IProps> = ({ pageCount, onChange, type }) => {
  const [page, setPage] = useState(1);
  const handleChange = (value: number) => {
		if (value <= 0) {
			return;
		}
    setPage(value);
    onChange && onChange(value);
  };

  return (
    <div className="custom-pagination">
      {(!type || type === "simple") && (
        <div className="simple-pagination">
					<Button className="pagination-button" type="button" onClick={() => handleChange(page - 1)}><ArrowBackIosNewOutlinedIcon /></Button>
					<span>{page}</span>
					<Button className="pagination-button" type="button" onClick={() => handleChange(page + 1)}><ArrowForwardIosOutlinedIcon /></Button>
				</div>
      )}
			{type === "extended" && (
        <Pagination
          className="mui-pagination"
          count={pageCount}
          variant="outlined"
          shape="rounded"
          onChange={(event, value) => handleChange(value)}
          page={page}
        />
      )}
    </div>
  );
};
