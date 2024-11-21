import Typography from "@mui/material/Typography";
import ForumIcon from '@mui/icons-material/Forum';
import router from "../routes";

const Branding = () => {
    return (
        <>
            <ForumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => router.navigate('/')}
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                cursor: 'pointer',
                color: 'inherit',
                textDecoration: 'none',
                }}
          >
            Chat-App
          </Typography>
        </>
    )
};
export default Branding;