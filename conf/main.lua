
local host = "127.0.0.1"
--local port = 6379
local port = 8800
--local req = "GET /echo \r\n"
local req = "GET / \r\n"
--local req = "*2\r\n$3\r\nget\r\n$3\r\naaa\r\n"
local sock = ngx.socket.tcp()
local ok, err =  sock:connect(host, port)
if not ok then
    ngx.say("failed to connect:", err)
    return
end

local bytes, err = sock:send(req)
if not bytes then
    ngx.say("failed to send query:", err)
    return
end

local body = ""
while true do
    local line, err = sock:receive()
    if not line then
        break
    end 
	body = body .. line
end
ngx.say("result:", body)
--ngx.say("result:", body)
--[[
--]]
--ngx.say('result: lua')
