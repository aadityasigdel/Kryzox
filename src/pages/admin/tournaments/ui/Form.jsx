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
import { Textarea } from "@/components/shadcn-ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn-ui/select";
import { Input } from "@/components/shadcn-ui/input";
import { Label } from "@/components/shadcn-ui/label";

import usePostData from "../../../../hooks/postData";
import useGetData from "../../../../hooks/getData";

import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";

import { useSelector } from "react-redux";

const SelectGame = ({ setSelectIds }) => {
  const {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();

  useEffect(() => {
    (async () => {
      await getData("/games/");
    })();
  }, []);

  // to display the result of the games
  useEffect(() => {
    if (result) console.log({ games: result });
  }, [result]);

  const handleIds = (id) => {
    setSelectIds((prev) => ({ ...prev, gameId: id }));
  };

  return (
    <div className="w-full">
      <Select
        onValueChange={(id) => {
          handleIds(id);
        }}
        className="text-white"
      >
        <SelectTrigger
          className="w-full bg-[#1B1230]  border border-purple-500/30 
                   text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
        >
          {" "}
          {/* Updated width */}
          <SelectValue
            placeholder="Select a game"
            className="!text-white w-full "
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>GAMES</SelectLabel>
            {result?.map((item) => (
              <SelectItem key={item?.gameId} value={String(item?.gameId)}>
                {item?.gameTitle}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

// select options for gameMode
const SelectGameMode = ({ setSelectIds }) => {
  const {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();
  useEffect(() => {
    (async () => {
      await getData("/modes/");
    })();
  }, []);
  // to display the result of the games
  useEffect(() => {
    if (result) console.log({ gamesMode: result });
  }, [result]);

  const handleIds = (id) => {
    setSelectIds((prev) => ({ ...prev, modeId: id }));
  };
  return (
    <Select
      onValueChange={(id) => {
        handleIds(id);
      }}
    >
      <SelectTrigger
        className="w-full bg-[#1B1230]  border border-purple-500/30 
                   text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
      >
        <SelectValue placeholder="Select a game mode" className="text-white" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Game mode</SelectLabel>
          {result.map((item) => {
            return (
              <SelectItem key={item.mapId} value={String(item?.modeId)}>{item?.modeName}</SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

// select map
const SelectMap = ({ setSelectIds }) => {
  const {
    getData,
    result,
    responseError,
    setResponseError,
    loading,
    errorCode,
    statusCode,
  } = useGetData();
  useEffect(() => {
    (async () => {
      await getData("/maps/");
    })();
  }, []);
  // to display the result of the games
  useEffect(() => {
    if (result) console.log({ map: result });
  }, [result]);
  const handleIds = (id) => {
    setSelectIds((prev) => ({ ...prev, mapId: id }));
  };
  return (
    <Select
      onValueChange={(id) => {
        handleIds(id);
      }}
    >
      <SelectTrigger
        className="w-full bg-[#1B1230]  border border-purple-500/30 
                   text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
      >
        <SelectValue placeholder="Select a map" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>MAPS</SelectLabel>
          {result?.map((item) => {
            return (
              <SelectItem key={item.mapId} value={String(item?.mapId)}>{item?.mapTitle}</SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

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

export function TournamentCreationForm({ setIsTournamentCreated }) {
  const [selectIds, setSelectIds] = useState({
    gameId: "",
    modeId: "",
    mapId: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    entryFee: "",
    gameID: "",
    gamePw: "",
    startTime: "",
  });
  const { loggedInUserInfo } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false); // New state to control dialog visibility

  const {
    loading,
    postData,
    responseError,
    setResponseError,
    result,
    statusCode,
  } = usePostData();

  // display ids of the games
  useEffect(() => {
    console.log({ selectIds });
    console.log({ loggedInUserInfo });
  }),
    [selectIds];

  // useEffect for data fetching
  useEffect(() => {
    if (responseError) {
      toast.error(responseError || "something went wrong!");
      setTimeout(() => {
        setResponseError(null);
      }, 1000);
    }
    if (statusCode === 201) {
      setIsTournamentCreated(true);
      toast.success(result?.message || "tournament created successfully");
      setIsOpen(false); // Close the dialog on success
      setFormData({
        title: "",
        content: "",
        entryFee: "",
        gameID: "",
        gamePw: "",
        startTime: "",
      });
    }
  }, [responseError, statusCode]);

  // test useEffect for the handleinput
  useEffect(() => {
    console.log({ formData });
  }, [formData]);

  // handleinput function
  const handleInput = (e) => {
    const { name, value } = e.target;
     if (name === "gameID") {
      if (value.includes(".")) {
        toast.error("Game ID can only be an integer.");
        return; // Stop here and don't update state
      }
    }
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formHandler = async (e) => {
    e.preventDefault();
      await postData(
        `/user/${loggedInUserInfo?.id || 1}/game/${selectIds.gameId}/gamemode/${
          selectIds.modeId
        }/map/${selectIds.mapId}/posts`,
        formData
      );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <FormBtn onClick={() => setIsOpen(true)}>+ Create Tournament</FormBtn>
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-3xl w-full bg-gradient-to-b from-[#2a1d47] to-[#1B1230] 
       border border-purple-500/30 rounded-2xl 
       p-8 space-y-8 text-white 
       max-h-[90vh] overflow-y-auto my-2
       scrollbar-thin scrollbar-thumb-purple-500/40 scrollbar-track-transparent"
      >
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
            <DialogDescription className="text-sm text-[#d9cbcb] md:text-base pb-5">
              Fill in the details for your new tournament.
            </DialogDescription>
          </DialogHeader>

          {/* ---------------- Basic Tournament Info ---------------- */}
          <div className="space-y-5 my-5">
            <h2 className="text-purple-300 font-semibold text-lg">
              Basic Tournament Info
            </h2>
            <div className="grid gap-6">
              {/* Tournament Title + Fee */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid gap-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-purple-200"
                  >
                    Tournament Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="enter title..."
                    onChange={handleInput}
                    value={formData.title}
                    required
                    className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                  rounded-xl text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="entryFee"
                    className="text-sm font-medium text-purple-200"
                  >
                    Entry Fee
                  </Label>
                  <Input
                    id="entryFee"
                    name="entryFee"
                    type="number"
                    placeholder="@example 700"
                    onChange={handleInput}
                    value={formData.entryFee}
                    step="1"
                    required
                    className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                  rounded-xl text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>
              </div>

              {/* Description Full Width */}
              <div className="grid gap-2">
                <Label
                  htmlFor="content"
                  className="text-sm font-medium text-purple-200"
                >
                  Description
                </Label>
                <Textarea
                  id="content"
                  type="textarea"
                  name="content"
                  placeholder="chance to win ..."
                  onChange={handleInput}
                  value={formData.content}
                  required
                  className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                rounded-xl text-white placeholder-purple-400 
                focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                />
              </div>
            </div>
          </div>

          {/* ---------------- Tournament Settings ---------------- */}
          <div className="space-y-6 mt-10">
            {" "}
            {/* Margin-top for separation */}
            <h2 className="text-purple-300 font-semibold text-lg">
              Tournament Settings
            </h2>
            <div className="grid gap-6">
              {/* Game ID + Game Pw */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid gap-2">
                  <Label
                    htmlFor="gameID"
                    className="text-sm font-medium text-purple-200"
                  >
                    Game ID
                  </Label>
                  <Input
                    id="gameID"
                    name="gameID"
                    type="number"
                    placeholder="enter gameID..."
                    onChange={handleInput}
                    value={formData.gameID}
                    required
                    className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                  rounded-xl text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="gamePw"
                    className="text-sm font-medium text-purple-200"
                  >
                    Game Pw
                  </Label>
                  <Input
                    id="gamePw"
                    name="gamePw"
                    placeholder="enter gamePw..."
                    onChange={handleInput}
                    value={formData.gamePw}
                    required
                    className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                  rounded-xl text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
                  />
                </div>
              </div>

              {/* Select Game + Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid gap-2">
                  <Label
                    htmlFor="selectGame"
                    className="text-sm font-medium text-purple-200"
                  >
                    Select Game
                  </Label>
                  <SelectGame setSelectIds={setSelectIds} className="w-full text-white" />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="selectGameMode"
                    className="text-sm font-medium text-purple-200"
                  >
                    Select Game Mode
                  </Label>
                  <SelectGameMode
                    setSelectIds={setSelectIds}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Select Map + Start Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="grid gap-2">
                  <Label
                    htmlFor="selectMap"
                    className="text-sm font-medium text-purple-200"
                  >
                    Select Map
                  </Label>
                  <SelectMap setSelectIds={setSelectIds} className="w-full" />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="startTime"
                    className="text-sm font-medium text-purple-200"
                  >
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    name="startTime"
                    type="datetime-local"
                    placeholder="2025-07-17T16:00"
                    onChange={handleInput}
                    value={formData.startTime}
                    required
                    className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 
                  rounded-xl text-white placeholder-purple-400 
                  focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all [&::-webkit-calendar-picker-indicator]:invert"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer - Buttons on Same Line */}
          <DialogFooter className="flex justify-end mt-12 gap-5">
            <DialogClose asChild>
              <Button className="px-6 py-3 text-[#d9cbcb] bg-transparent border border-purple-500/30 rounded-xl hover:bg-transparent hover:text-white transition-all">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
              className="px-6 py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]"
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
