"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Recipe = {
  id: number;
  name: string;
  portionSize: string;
  frozenDefrosted: string;
  autofryerMinutes: string;
  sauce: string;
  extraIngredients: string;
  packaging: string;
  notes: string;
  categoryId: string;
  picname: string;
  brand: string;
}

const categoryMapping = {
  "1": "STARTERS",
  "2": "MAIN COURSE",
  "3": "SALT CHILLI",
  "4": "WOK FAVOURITES",
  "5": "HOT SPICY CHALLENGE",
  "6": "WOK NOODLES",
  "7": "WOK FRIED RICE",
  "8": "SIDES",
  "9": "VEGETARIAN OPTIONS",
  "10": "DESSERTS",
}

export const columns: ColumnDef<Recipe>[] = [
  { header: 'Name', accessorKey: 'name', filterFn: 'includesString' },
  { header: 'Portion Size', accessorKey: 'portionSize' },
  { header: 'Frozen/Defrosted', accessorKey: 'frozenDefrosted' },
  { header: 'Autofryer Minutes', accessorKey: 'autofryerMinutes' },
  { header: 'Sauce', accessorKey: 'sauce' },
  { header: 'Extra Ingredients', accessorKey: 'extraIngredients' },
  { header: 'Packaging', accessorKey: 'packaging' },
  { header: 'Notes', accessorKey: 'notes' },
  {
    header: 'Category ID', accessorKey: 'categoryId', cell: ({ row }) => {
      const categoryId = Number(row.original.categoryId);
      let categoryName;

      switch (categoryId) {
        case 1:
          categoryName = "STARTERS";
          break;
        case 2:
          categoryName = "MAIN COURSE";
          break;
        case 3:
          categoryName = "SALT CHILLI";
          break;
        case 4:
          categoryName = "WOK FAVOURITES";
          break;
        case 5:
          categoryName = "HOT SPICY CHALLENGE";
          break;
        case 6:
          categoryName = "WOK NOODLES";
          break;
        case 7:
          categoryName = "WOK FRIED RICE";
          break;
        case 8:
          categoryName = "SIDES";
          break;
        case 9:
          categoryName = "VEGETARIAN OPTIONS";
          break;
        case 10:
          categoryName = "DESSERTS";
          break;
        default:
          categoryName = "Unknown Category";
          break;
      }

      return categoryName;
      // Render the corresponding category name
    },
  },
  { header: 'Picture Name', accessorKey: 'picname' },
  { header: 'Brand', accessorKey: 'brand' },
  // {
  //   header: 'Actions',
  //   Cell: ({ row }: { row: any }) => (
  //     <div className="flex gap-2">
  //       <Button onClick={() => handleSave(row.original.id)} className="bg-blue-500 text-white">
  //         Save
  //       </Button>
  //       <Button onClick={() => handleDelete(row.original.id)} className="bg-red-500 text-white">
  //         Delete
  //       </Button>
  //     </div>
  //   ),
  // },
];
