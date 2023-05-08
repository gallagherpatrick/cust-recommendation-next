import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import Header from "@/pages/components/Header";
import Button from "@/pages/components/Button";


const inter = Inter({ subsets: ['latin'] });

function Customer({basket}){
    const router = useRouter();
    const id = router.query.id;

    return  <main
    className={`flex min-h-screen flex-col ${inter.className}`}
    >
        <Header text={id} src={"/" + id + ".png"}/>
        <Button basket={basket} />
    </main>
}

export async function getStaticProps(context){
    const res = await fetch('http://127.0.0.1:5137/orders?user=1');
    const data = await res.json();

    return {
        props: {
            basket: data[0].basket
        },
        revalidate: 10,
    }
}

export async function getStaticPaths(){
    return {
        paths: [
            {params: {id: 'sheetz'}}
        ],
        fallback: false
    };
}




export default Customer;