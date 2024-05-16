"use client"
import { Trash2 } from 'lucide-react';
import React from 'react';
import { toast } from './ui/use-toast';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useRouter } from 'next/navigation';
import { deletedCategory } from '@/actions/category';
import { deletedTable } from '@/actions/table';

export default function DeleteTable({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure you want to delete this Table?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await deletedTable(id);
              toast({
                description: 'Successfully deleted Table',
              });
      
              router.refresh();
            } catch (error) {
              console.error('Error:', error);
              toast({
                description: 'Failed to delete Table',
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
    <button onClick={handleDelete} className="hidden lg:block md:block">
      <Trash2 size={18} className="text-xs text-red-600" />
    </button>
  );
}
