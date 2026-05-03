"use client";

import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { authClient } from "@/lib/auth-client"
export function UpdateProfile() {
    const onSubmit=async(e)=>{
            e.preventDefault()
        const name=e.target.name.value
        const image=e.target.image.value
        console.log({name,image})
         await authClient.updateUser({
    image,
    name
})
    }
  return (
    <Modal>
      <Button className="w-full bg-amber-400 text-xl text-white" variant="secondary">Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
           
            <p>Update your information</p>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your img url" />
                  </TextField>
                 <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}