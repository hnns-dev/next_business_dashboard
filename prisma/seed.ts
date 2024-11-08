import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Schedule Data
  await prisma.task.createMany({
    data: [
      { title: "Finish Q3 report", dueDate: new Date("2023-09-15") },
      { title: "Schedule team meeting", dueDate: new Date("2023-09-20") },
      { title: "Review marketing campaign", dueDate: new Date("2023-10-01") },
    ],
  });

  await prisma.meeting.createMany({
    data: [
      { title: "Sales team catch-up", date: new Date("2023-09-18") },
      { title: "Product roadmap discussion", date: new Date("2023-10-05") },
      { title: "Finance quarterly review", date: new Date("2023-11-01") },
    ],
  });

  await prisma.event.createMany({
    data: [
      { title: "Company anniversary party", date: new Date("2023-12-10") },
      { title: "Software engineering meetup", date: new Date("2023-11-20") },
      { title: "Industry conference", date: new Date("2024-03-15") },
    ],
  });

  await prisma.timeline.createMany({
    data: [
      { title: "Launch new product line", date: new Date("2023-08-01") },
      { title: "Acquire competitor company", date: new Date("2023-10-15") },
      { title: "Rebrand company website", date: new Date("2024-01-01") },
    ],
  });

  // Projects Data
  await prisma.product.createMany({
    data: [
      { name: "Product A", category: "Electronics", price: 99.99 },
      { name: "Product B", category: "Furniture", price: 149.99 },
      { name: "Product C", category: "Clothing", price: 49.99 },
    ],
  });

  await prisma.customer.createMany({
    data: [
      { name: "John Doe", email: "john.doe@example.com" },
      { name: "Jane Smith", email: "jane.smith@example.com" },
      { name: "Bob Johnson", email: "bob.johnson@example.com" },
    ],
  });

  await prisma.sale.createMany({
    data: [
      {
        customerId: 1,
        productId: 1,
        quantity: 5,
        date: new Date("2023-08-15"),
      },
      {
        customerId: 2,
        productId: 2,
        quantity: 3,
        date: new Date("2023-09-01"),
      },
      {
        customerId: 3,
        productId: 3,
        quantity: 2,
        date: new Date("2023-09-30"),
      },
    ],
  });

  await prisma.finance.createMany({
    data: [
      { month: "August", revenue: 50000, expenses: 30000 },
      { month: "September", revenue: 60000, expenses: 35000 },
      { month: "October", revenue: 55000, expenses: 32000 },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
