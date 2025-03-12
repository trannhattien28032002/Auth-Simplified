import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore.js";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordPage = () => {
    const { password, setPassword } = useState("");
    const { confirmPassword, setConfirmPassword } = useState("");
    const { resetPassword, error, isLoading, message } = useAuthStore();

    const { token } = useParams();
    const navigate = useNavigate();

    return (
        <motion.div>
            
        </motion.div>
    );
};

export default ResetPasswordPage;
