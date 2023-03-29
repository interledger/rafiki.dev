---
id: inputObjects
title: Input objects
slug: inputObjects
sidebar_position: 8
---

## AddAssetLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the asset to add liquidity.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of liquidity to add.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the transfer.</p>
</td>
</tr>
</tbody>
</table>

## AddKeyToClientInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
clientId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
jwk<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AddPeerLiquidityInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
peerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the peer to add liquidity.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of liquidity to add.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the transfer.</p>
</td>
</tr>
</tbody>
</table>

## AmountInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
value<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetCode<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
assetScale<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## AssetInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scale<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateApiKeyInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment pointer API key is created for.</p>
</td>
</tr>
</tbody>
</table>

## CreateAssetInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
code<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
scale<br />
<a href="/docs/reference/scalars#int"><code>Int!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
withdrawalThreshold<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateAssetLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
assetId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the asset to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of withdrawal.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
</tbody>
</table>

## CreateClientInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
name<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
uri<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
image<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
email<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateIncomingPaymentInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
expiresAt<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
incomingAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreateOutgoingPaymentInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
quoteId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
description<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
externalRef<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
asset<br />
<a href="/docs/reference/inputObjects#assetinput"><code>AssetInput!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
url<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
publicName<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePaymentPointerWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the Open Payments payment pointer to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
</tbody>
</table>

## CreatePeerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/inputObjects#httpinput"><code>HttpInput!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
asset<br />
<a href="/docs/reference/inputObjects#assetinput"><code>AssetInput!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
staticIlpAddress<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## CreatePeerLiquidityWithdrawalInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
peerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the peer to create the withdrawal for.</p>
</td>
</tr>
<tr>
<td>
amount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64!</code></a>
</td>
<td>
<p>Amount of withdrawal.</p>
</td>
</tr>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>The id of the withdrawal.</p>
</td>
</tr>
</tbody>
</table>

## CreateQuoteInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
sendAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiveAmount<br />
<a href="/docs/reference/inputObjects#amountinput"><code>AmountInput</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
receiver<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## DeleteAllApiKeysInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment pointer API keys are deleted from.</p>
</td>
</tr>
</tbody>
</table>

## HttpIncomingInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
authTokens<br />
<a href="/docs/reference/scalars#string"><code>[String!]!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## HttpInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
incoming<br />
<a href="/docs/reference/inputObjects#httpincominginput"><code>HttpIncomingInput</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
outgoing<br />
<a href="/docs/reference/inputObjects#httpoutgoinginput"><code>HttpOutgoingInput!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## HttpOutgoingInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
authToken<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
endpoint<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## RedeemApiKeyInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
key<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>API key</p>
</td>
</tr>
<tr>
<td>
paymentPointerId<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Payment pointer API key was issued for.</p>
</td>
</tr>
</tbody>
</table>

## RefreshSessionInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
key<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Session key</p>
</td>
</tr>
</tbody>
</table>

## RevokeSessionInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
key<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>
<p>Session key</p>
</td>
</tr>
</tbody>
</table>

## UpdateAssetInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
withdrawalThreshold<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

## UpdatePeerInput



<p style={{ marginBottom: "0.4em" }}><strong>Arguments</strong></p>

<table>
<thead><tr><th>Name</th><th>Description</th></tr></thead>
<tbody>
<tr>
<td>
id<br />
<a href="/docs/reference/scalars#string"><code>String!</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
maxPacketAmount<br />
<a href="/docs/reference/scalars#uint64"><code>UInt64</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
http<br />
<a href="/docs/reference/inputObjects#httpinput"><code>HttpInput</code></a>
</td>
<td>

</td>
</tr>
<tr>
<td>
staticIlpAddress<br />
<a href="/docs/reference/scalars#string"><code>String</code></a>
</td>
<td>

</td>
</tr>
</tbody>
</table>

