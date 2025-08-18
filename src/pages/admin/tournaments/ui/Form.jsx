import React, { useEffect, useState } from "react";
import { Button } from "@/components/shadcn-ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn-ui/dialog";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";

import usePostData from "../../../../hooks/postData";

import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

const FormBtn = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="h-[38.48px] px-3 text-white text-[13.13px] flex items-center gap-2 rounded-xl transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0] shadow-lg"
      style={{
        backgroundImage: "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
      }}
    >
      {children}
    </button>
  );
});

export function TournamentCreationForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    entryFee: "",
    startTime: "",
  });
  const { loading, postData, responseError, result, statusCode } =
    usePostData();
  // useEffect for data fetching
  useEffect(() => {
    if (responseError)
      toast.error(
        responseError?.response?.data?.message || "something went wrong!"
      );
    if (statusCode === 201) {
      toast.success(result?.message || "tournament created successfully");
    }
  }, [responseError, statusCode]);

  // test useEffect for the handleinput
  useEffect(() => {
    console.log({ formData });
  }, [formData]);
  // handleinput function
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const formHandler = async (e) => {
    e.preventDefault();
    alert("this is test message");
    await postData("/user/1/game/1/gamemode/1/posts", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <FormBtn>+ Create Tournament</FormBtn>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xl bg-[#241B3A] border border-purple-500/20 rounded-3xl p-6 space-y-4">
        <form className="text-white" onSubmit={formHandler}>
          <DialogHeader className="text-center md:text-left">
            <DialogTitle
              className="text-xl font-semibold md:text-3xl"
              style={{
                background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Create Tournament
            </DialogTitle>
            <DialogDescription className="text-sm text-[#d9cbcb] md:text-base">
              Fill in the details for your new tournament.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label
                htmlFor="title"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Tournament Title
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="enter title..."
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="content"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Description
              </Label>
              <Input
                id="content"
                name="content"
                placeholder="chance to win ..."
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="entryFee"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Entry Fee
              </Label>
              <Input
                id="entryFee"
                name="entryFee"
                placeholder="@example 700"
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>
            <div className="grid gap-2">
              <Label
                htmlFor="startTime"
                className="block text-sm font-medium text-purple-200 mb-2"
              >
                Start Time
              </Label>
              <Input
                id="startTime"
                name="startTime"
                type="datetime-local"
                placeholder="2025-07-17T16:00"
                onChange={handleInput}
                required
                className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              />
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row sm:justify-end mt-4">
            <DialogClose asChild>
              <Button className="w-full sm:w-auto text-[#d9cbcb] bg-transparent border border-purple-500/30 rounded-xl hover:bg-transparent hover:text-white transition-all">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
              }}
            >
              {loading ? <ClipLoader size={20} color="#fff" /> : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
