import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DataGridDemo from "../../components/PostData/PostData";
import { Box } from "@mui/material";
import DepartmentSelection from "../../components/DepartmentSelection/DepartmentSelection";

const SecondPage = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData') || '{}');
        console.log({ savedFormData });
        // const { name = "", email = "", phone = "" } = savedFormData;
        const { name, email, phone } = savedFormData;
        if (name === "" || email === "" || phone === "") {
            // Redirect to the home page if any of the required fields is empty
            navigate('/');
            toast.error('You must need to fill up all fields.');
        }
    }, 1000);
    // console.log(postData);
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", marginTop: "2rem", marginBottom: "10rem" }}>
            <DataGridDemo />
            <DepartmentSelection />
            {/* <DesignDepartment /> */}
        </Box>
    );
};

export default SecondPage;