import Categories from "@/components/Categories";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";

export default function Home() {
  const isEmpty = true;
  if (isEmpty) {
    return (
      <div className="pt-[7rem]">
        <Categories />
        <EmptyState showReset />
      </div>
    );
  }
  return (
    <div className="pt-[7rem]">
      <Categories />
      <Container>
        <div
          className="
            pt-28
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            2xl:grid-cols-6
            gap-8
          "
        >
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </Container>
    </div>
  );
}
