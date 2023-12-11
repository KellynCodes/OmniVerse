import ItemNotFound from "@/components/shared/ItemNotFound";

export default function NotFound() {
  return (
    <ItemNotFound
      buttonLabel="Return Home"
      navigationLink="/"
      message="This page is not found."
    />
  );
}
