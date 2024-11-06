import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Create your own Account or use guest login.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="mb-6">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Email">Email</Label>
              <Input id="Email" placeholder="Enter your Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Password</Label>
              <Input id="Password" placeholder="Enter your Password"></Input>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-center">
        <Button className="w-full">Sign Up</Button>
        <Button variant="secondary" className="w-full">
          Guest Login
        </Button>
      </CardFooter>
    </Card>
  );
}
