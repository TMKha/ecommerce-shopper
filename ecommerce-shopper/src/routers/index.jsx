import { GuestRoute } from "@/components/GuestRoute";
import { PrivateRoute } from "@/components/PrivateRoute";
import { PATH } from "@/config/path";
import { MainLayout } from "@/layouts/MainLayout";
import { Account } from "@/pages/Account";
import { ProductPage } from "@/pages/product";
import { ProductDetailPage } from "@/pages/[slug]";
import { lazy } from "react";
import { profile } from "./profile";
const Home = lazy(() => import('@/pages'))
const Page404 = lazy(() => import('@/pages/404'))

export const routers = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                element: <ProductPage/>,
                path:PATH.Product
            },
            {
                element: <ProductPage/>,
                path:PATH.Category
            },
            {
                element: <ProductDetailPage/>,
                path:PATH.ProductDetail
            },
            {
                element: <PrivateRoute redirect={PATH.Account}/>,
                children: profile,
                path: PATH.Profile.index
            },
            {
                element: <GuestRoute redirect={PATH.Profile.index}/>,
                path:PATH.Account,
                children: [
                    {
                        index:true,
                        element:<Account/>
                    }
                ]
            },

            {
                element: <Page404 />,
                path: '*'
            }
        ]
    }
]