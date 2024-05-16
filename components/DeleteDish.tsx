"use client"
import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from './ui/use-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRouter } from 'next/navigation';
import { deletedDish } from '@/actions/dish';
// import { deletedCategory } from '@/actions/Dish';

export default function DeleteDish({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this Dish?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await deletedDish(id);
              toast({
                description: 'Successfully deleted Dish',
              });
          
              router.refresh();
            } catch (error) {
              console.error('Error:', error);
              toast({
                description: 'Failed to delete Dish',
              });
            }
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <button onClick={handleDelete} className=" block md:block text-red-500">
      Delete
    </button>
  );
}
