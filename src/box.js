import * as React from "react";
import Box from "@mui/material/Box";
import grey from "@mui/material/colors/grey";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";

export default function AddUserBox() {
  return (
    <Box
      sx={{
        width: 400,
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: grey[500],
        borderStyle: "dashed",
        borderRadius: "10px"
      }}
    >
      <IconButton>
        <AddIcon sx={{ fontSize: 80 }} />
      </IconButton>
    </Box>
  );
}
