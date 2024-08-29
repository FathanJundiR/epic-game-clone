import ErrorFlashComponent from "@/components/ErrorFlashComponent";
import SignUpForm from "@/components/SignUpForm";

export default function loginPage() {
  return (
    <>
      <section>
        <ErrorFlashComponent></ErrorFlashComponent>
        <SignUpForm></SignUpForm>
      </section>
    </>
  );
}
