// components/withAuth.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent: any) => {
    return (props: any) => {
        const router = useRouter();
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const token = Cookies.get('token');
            if (!token) {
                router.push('/login');
            } else {
                setLoading(false);
            }
        }, []);

        if (loading) {
            return <div>Loading...</div>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
