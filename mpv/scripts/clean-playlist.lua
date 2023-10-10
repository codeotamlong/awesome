local blacklist = {'cue', 'txt', 'jpg', 'jpeg', 'gif', 'png', 'log', 'nfo'}

local temp = {}
for _, ext in pairs(blacklist) do
    temp[ext] = true
end
blacklist = temp

-- Observing playlist instead of playlist-count would call this 3 times
-- unnecessarily on each playlist-entry change, though it would be more correct
-- since it would exclude blacklisted files in single-file directory/playlists,
-- which don't change playlist-count, and files added by calling loadfile with
-- a blacklisted file.
mp.observe_property('playlist-count', 'native', function ()
    local playlist = mp.get_property_native('playlist')
    for i = #playlist, 1, -1 do
        if blacklist[playlist[i].filename:match('%.(%w+)$')]
           and playlist[i].filename:match('playlist.m3u8$') == nil then
            mp.commandv('playlist-remove', i-1)
        end
    end
end)