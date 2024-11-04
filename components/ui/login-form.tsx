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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { Separator } from "./separator";

export function CardWithForm() {
  return (
    <Card className="w-[400px] p-4">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-2">
          <TabsTrigger value="guest">Guest</TabsTrigger>
          <TabsTrigger value="password">Account</TabsTrigger>
        </TabsList>
        <TabsContent value="guest">
          <Card>
            <CardHeader>
              <CardTitle>Guest Login</CardTitle>
              <CardDescription>
                Use to try out App functionalities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div> */}
            </CardContent>
            <CardFooter>
              <Button>Login as Guest</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Enter your Mail and password to create Account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="mail">Enter your Email</Label>
                <Input id="mail" type="email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Enter your password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Sign In</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
