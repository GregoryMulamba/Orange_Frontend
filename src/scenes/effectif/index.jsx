import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Effectif = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "matricule", headerName: "MATRICULE" },
    {
      field: "fullname",
      headerName: "FULLNAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cls",
      headerName: "CLASSIFICATION",
      type: "name",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "fonc",
      headerName: "FONCTION",
      flex: 1,
    },
    {
      field: "dir",
      headerName: "DIRECTION",
      flex: 1,
    },
    {
      field: "emp",
      headerName: "EMPLOYEUR",
      flex: 1,
    },
    
  ];

  return (
    <Box m="20px">
      <Header
        title="EFFECTIF"
        subtitle="La liste des agents par direction"
        /* The `subtitle` prop in the `<Header>` component is being passed as a boolean value. In this
        case, `subtitle` is not assigned a specific value, so it defaults to `true`. This means that
        the subtitle will be displayed in the header component with the text "La liste des agents
        par direction". */
        
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "#FFFFFF",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#FF8C00",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "#FF8C00",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Effectif;
