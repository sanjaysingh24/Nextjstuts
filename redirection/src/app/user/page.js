import { redirect } from 'next/navigation';

export default function Page() {
    /// direct redirection  from the component
//  redirect("/about")

    return <h1>Hello, this is the user page</h1>;
}
